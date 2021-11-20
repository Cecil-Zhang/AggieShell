import {PhantomBar} from "./Phantom";

export default (props) => {

    return (
        <div className="ui menu black" style={{ 'marginTop': '5px' }}>
            <a href="/#" className="ui header item" onClick={() => props.setRoute(0)}>Funding</a>
            <a href="/#" className="ui item" onClick={() => props.setRoute(0)}>Campaigns</a>
            <PhantomBar />
            <div className="right menu">
                <a href="/#" className="item" onClick={() => props.setRoute(1)}>Create Campaign</a>
            </div>

        </div>
    );
};