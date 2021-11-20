import React, {useEffect, useState} from 'react';

const getProvider = (force) => {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    if (force) {
        window.open("https://phantom.app/", "_blank");
    }
};

function isConnected () {
    return getProvider(false) ? true : false;
}

// return 
async function connect() {
    try {
        const provider = getProvider();
        if (provider) {
            const resp = await window.solana.connect();
            console.log('connected to phantom wallet')
            return resp.publicKey.toString()
        }
        
    } catch (err) {
        console.error(err);
    }
}

const PhantomBar = () => {
    const [isConnected, setConnected] = useState(false);
    const [pubKey, setPubKey] = useState(null);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        const phantom = getProvider(false);
        if (phantom) {
            phantom.connect({onlyIfTrusted: true})
            .then((pubKey) => {
                setConnected(true);
                setPubKey(pubKey);
            })
            .catch((err) => {console.error('failed to auto connect ' + err)});
        }
    });
  
    return (
        <div className='ui item'>
        {isConnected ? 
            <span>Phantom Connected</span> : <a href='/#' className='ui item' onClick={() => connect().then(setConnected(true))}>Connect Phantom</a>
        }
        </div>
    );
};


export {isConnected, connect, getProvider, PhantomBar}