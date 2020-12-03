'use strict';
import QRCode from 'qrcode';
import React, {useEffect, useState} from 'react';
import {Text, useStdout} from 'ink';

const QR = ({text}) => {
  const {write} = useStdout();
  const [data, setData] = useState('');
  const [err, setErr] = useState('');
  useEffect(()=>{
    QRCode.toString(text, {
      errorCorrectionLevel: 'H',
      margin: 2,
      scale: 8,
      color: {
        dark: '#fefefefe',
        light: '#000000ff',
      }
    })
    .then(url => {
      setData(url);
    })
    .catch(err => {
      setErr(err.message);
    })
  }, [])

  if (data) {
    write(data);
    write('    ' + text);
  }
  return err ? <Text>{err}</Text> : null;
};

/**
 * Render QRCode.
 */
export const skillQRCode = {
  name: 'qrcode',
  help: 'qrcode [text] - Generate QRCode with [text]',
  rule: /qrcode (.*)/i,
  requirements: {
    adapters: ['cli'],
  },
  action: function(robot, msg) {
    robot.sendComponent(<QR text={msg[1]}/>);
    robot.render();
  }
};

const skills = [skillQRCode];
export { skills };
