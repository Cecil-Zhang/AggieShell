import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { ApiOutlined, CheckOutlined } from '@ant-design/icons';

const getProvider = (force) => {
  if (typeof window !== 'undefined') {
    if ("solana" in window) {
      const provider = window.solana;
      if (provider.isPhantom) {
        return provider;
      }
    }
    if (force) {
        window.open("https://phantom.app/", "_blank");
    }
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

    // return 
    async function connect() {
      try {
          const provider = getProvider();
          if (provider) {
              const resp = await window.solana.connect();
              console.log('connected to phantom wallet')
              setConnected(true);
              return resp.publicKey.toString()
          }
      } catch (err) {
          console.error(err);
      }
    }
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
            .catch((err) => {
              setConnected(false);
              console.error('failed to auto connect ' + err)
            });
        }
    });
    
    return (
        <div className='ui item'>
          {isConnected ? 
            <Button type='primary' icon={<CheckOutlined />} size={'large'}>Phantom Wallet Connected</Button>:
            <Button type='primary' ghost className='ui item' icon={<ApiOutlined />} size={'large'}
              onClick={() => connect()}>
              Connect Phantom Wallet
            </Button>
          }
        </div>
    );
};


export {isConnected, connect, getProvider, PhantomBar}