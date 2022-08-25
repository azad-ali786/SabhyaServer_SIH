import Layout from "../../../components/Layout";
import Resource from "../../../../ethereum/resource";
import { Card, Divider } from 'semantic-ui-react'
import SubscribeToForm from "../../../components/templates/SubscribeToForm";

const HeiDetails = (props) => {
    const { mc, fc, uc, ma, ca } = props;

    const renderCards = () => {
        return <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>NIT Silchar</Card.Header>
                    <Card.Meta>Address of manager</Card.Meta>
                    <Card.Description style={{
            whiteSpace: 'nowrap',
            width: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
                        {ma}
                    </Card.Description>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Card.Header content='Minumum Contribution' />
                    <Card.Meta content='In wei' />
                    <Card.Description content={'You must contribute at least ' + mc + ' (wei) to become an approver.'} />
                </Card.Content>
            </Card>

            <Card>
                <Card.Content
                    header='Total Subsctibers'
                    meta={uc}
                    description='This is the total subscription'
                />
            </Card>

            <Card
                header='Total fies count'
                meta={fc}
                description='Total files count'
            />
            <Card>
                <Card.Content>
                    <Card.Header content='Subscribe to Institution' />
                    <Card.Meta content='In wei' />
                    <Card.Description><SubscribeToForm mc={mc} contractaddress={ca} style={{ textAlign: 'center', marginTop: '4px' }} /></Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
    }
    return <Layout>
    <h3>Institutuon Details</h3>
    {renderCards()}
    <Divider />
    </Layout>
}

export async function getServerSideProps(context) {
    //  Runs only on the server. and works for every incoming request
    //   //should be used whe we need req,res or if we want to regenerate page multiple times
    // console.log(context);
    try {
        const address = context.params.address;
        console.log(address);
        const campaign = Resource(address);
        const details = await campaign.methods.getHeiDetails().call();
        const {
            0: mc, // minimumContribution
            1: fc, // file count
            2: uc, // userCount
            3: ma  // managerAddress
        } = details;

        return {
            props: { mc, fc, uc, ma, ca: address } // ca = Contract Address;
        }
    } catch (err) {
        return { props: err };
    }


}
export default HeiDetails 
