import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Converter.css'


const CoinverterList = (props) => {
  useEffect(() => {
    Converting()
  })

  const [coinA, setCoinA] = useState(0);
  const [coinB, setCoinB] = useState('');
  const [cotacao, setCotacao] = useState('')

  const Converting = () => {
    let change = `${props.moedaA}-${props.moedaB}`
    let url = `https://economia.awesomeapi.com.br/json/${change}`
    axios.get(url).then(res => {setCotacao(res.data['0'].high)})
    setCoinB(cotacao * coinA)
  }

  return(
    <div className="Box">
    <h2>{props.moedaA} para {props.moedaB} </h2>
    <input type='text' onChange={(event => {setCoinA(event.target.value)})}></input>
    <h3>{coinB}</h3>
    </div>
  )
}

export default CoinverterList;