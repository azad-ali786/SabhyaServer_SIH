import { Form, Container, Button, Input, Message } from "semantic-ui-react";
import { useState } from "react";
import web3 from "../../../../ethereum/web3";
import Resource from "../../../../ethereum/resource";
import { create } from 'ipfs-http-client';
// import NewDownload from "./newdowload";

const NewRequest = (props) => {

    const { address } = props;
    console.log(props,"my values")
    const [amount, setamount] = useState('');
    const [buffer, setbuffer] = useState(null);
    const [hash, sethash] = useState('');
    const [description, setdescription] = useState('');
    const [recipient, setrecipient] = useState('');
    const [loading, setloading] = useState(false)
    const [msg, setmsg] = useState({ header: '', message: '' });

    // const downloadURL = "https://sabhyaserver101.infura-ipfs.io/ipfs/QmQZa9ydrFiNc7cvZpU1csFT9pw1dHm6ay4iB6FiHwoTR8";

    const projectId = '2DXMKunfP4sLPXiLF6fPNqFXxpA';   // <---------- your Infura Project ID

    const projectSecret = 'a9f17b8ee177ce48c933ab817c4e7f97';  // <---------- your Infura Secret
    // (for security concerns, consider saving these values in .env files)

    const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

    const client = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    });

    const inputHandler = (event) => {
        const { value, name } = event.target;
        if (name === "description") setdescription(value);
        else if (name === "amount") setamount(value);
        else setrecipient(value);
    }
    const fileHandler = event => {
        const file = event.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
            setbuffer(Buffer(reader.result))
        }
    }
    const fileUploadHandler = async (event) => {
        event.preventDefault();
        try {
            const res= await client.add(buffer);
            console.log("IPFS RES",res);
            sethash(res.path);
            console.log("//////hash");            
            // console.log('buffer', buffer);
            // console.log(res);
            console.log(hash);
            console.log("//////hash");
        }
        catch (err) {
            console.log(err);
        }
    }

    const seeFileHash = async (event) => {
        event.preventDefault();
        try {
            console.log("//////hash");            
            // console.log('buffer', buffer);
            // console.log(res);
            console.log(hash);
            console.log("//////hash");
        }
        catch (err) {
            console.log(err);
        }
    }
    const submitHandler = async (event) => {
        event.preventDefault();
        if (Number(amount) < 0) {
            setloading(false);
            setmsg({
                header: 'Error',
                message: ' Please fill the amount'
            })
            return;
        }
        else if (!web3.utils.isAddress(recipient)) {
            setloading(false);
            setmsg({
                header: 'Error',
                message: ' Please enter a valid address'
            })
            return;
        }
        else if (!description.length) {
            setloading(false);
            setmsg({
                header: 'Error',
                message: ' Please enter some description for reference'
            })
            return;
        }
        else if (!hash.length) {
            setloading(false);
            setmsg({
                header: 'Error',
                message: ' Please Upload document'
            })
            return;
        }
        setloading(true);
        setmsg({ header: '', message: '' });
        try {
            setmsg({ header: "Transaction", message: "Waiting on Transaction success..." });
            const campaign = Resource(address);
            console.log(campaign);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.uploadfile(description, hash, web3.utils.toWei(amount, 'ether'), recipient).send({
                from: accounts[0],
            });
            setmsg({ header: "Congratulations", message: "You've successfully created request" });
        }
        catch (err) {
            let message = '';
            if (err.code === 4001) {
                message = err.message.split(":")[1];
            } else {
                message = err.message;
            }
            setmsg({
                header: 'Error',
                message: message
            });
        }
        setloading(false);
    }

    return <>
        <Container textAlign="center" text>
            <Form
                style={{ marginTop: "5rem" }}
                onSubmit={submitHandler}
                loading={loading}
                error={msg.header === 'Error'}
                success={msg.header === "Congratulations"}                >

                <Form.Field>
                    <label style={{ marginBottom: "4px" }} className="text-uppercase">
                        Description
                    </label>
                    <Input
                        required
                        onChange={inputHandler}
                        value={description}
                        name="description"
                        icon="question circle"
                        iconPosition="left"
                        placeholder="Description..."
                    />
                    <label
                        style={{ marginBottom: "4px", marginTop: "2rem" }}
                        className="text-uppercase"
                    >
                        Request Amount (ETH)
                    </label>
                    <Input
                        required
                        onChange={inputHandler}
                        type="number"
                        value={amount}
                        name="amount"
                        icon="money bill alternate"
                        iconPosition="left"
                        placeholder="Withdraw amount..."
                    />
                    <label style={{ marginTop: "2rem" }} className="text-uppercase">
                        Uploader
                    </label>
                    <Input
                        required
                        onChange={inputHandler}
                        value={recipient}
                        name="recipient"
                        icon="ethereum"
                        iconPosition="left"
                        placeholder="Recipient address..."
                    />
                    <label style={{ marginTop: "2rem" }} className="text-uppercase">
                        File
                    </label>
                    <input type="file" onChange={fileHandler} required />
                </Form.Field>
                <Button primary onClick={fileUploadHandler} >
                    Upload
                </Button>
                <Button primary type="submit" >
                    CREATE REQUEST
                </Button>
                <Button primary onClick={seeFileHash} >
                    SEE HASH
                </Button>
                
                {/* <NewDownload address={address}/> */}
                <Message success header={msg.header} content={msg.message} />
                <Message error header={msg.header} content={msg.message} />
            </Form>
        </Container>
    </>
}
export async function getServerSideProps(ctx) {
    try {
        const address = ctx.params.address;
        return {
            props: { address }
        }
    } catch (err) {
        return { props: err };
    }
}
export default NewRequest;



//ex hash= 'QmWFYNFH2KFarrrGoDx7GaAB5RN7MX3z1qWFTfUm7Pzd4o'
 //ex url: https://ipfs.infura.io/ipfs/${hash}

 //for this project
 //https://sabhyaserver101.infura-ipfs.io/ipfs/${hash}