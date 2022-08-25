//host.campaign/new
//create new campaign

import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { useState } from "react";
import hei from "../../../ethereum/hei";
import web3 from "../../../ethereum/web3";
import { useRouter } from 'next/router';

const CampaignNew = () => {
    const router = useRouter();
    const [minimumContribution, setminimumContribution] = useState('');
    const [loading, setloading] = useState(false)
    const [msg, setmsg] = useState({ header: '', message: '' });
    const onChangeHandler = (event) => {
        setminimumContribution(event.target.value);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        //Create Campaign using factory instance
        if (Number(minimumContribution) <= 0) {
            setloading(false);
            setmsg({
                header: 'Error',
                message: ' Please fill the amount'
            })
            return;
        }
        setloading(true);
        setmsg({ header: '', message: '' });
        try {

            setmsg({ header: "Transaction", message: "Waiting on Transaction success..." });
            const accounts = await web3.eth.getAccounts();
            await hei.methods.createResource(minimumContribution).send({
                from: accounts[0],
            });
            setmsg({ header: "Congratulations", message: "You've created a Hei" });
            setTimeout(() => {
                router.push('/');
            }, 1000);
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
    return (
        <Layout>
            <h3>Create a Campaign</h3>
            <Form style={{ marginTop: "10rem" }} onSubmit={onSubmitHandler} error={msg.header === 'Error'} success={msg.header === "Congratulations"}>
                {/* !errorMessage will return false if errorMessage is emptyy */}
                <Form.Field>
                    <label>Minimum Contribution ForYour Project</label>
                    <Input type="number" value={minimumContribution} onChange={onChangeHandler} labelPosition="right" label="Amount in Wei" />
                </Form.Field>
                <Message success header={msg.header} content={msg.message} />
                <Message error header={msg.header} content={msg.message} />
                <Button type="submit" loading={loading} primary>Create!</Button>
            </Form>
        </Layout>
    )
}

export default CampaignNew;