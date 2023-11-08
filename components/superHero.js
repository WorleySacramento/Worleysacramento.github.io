import React from 'react';
import axios from 'axios';


const token = REACT_API_tOKEN
const tableColumns = [
    {
      title: '',
      dataIndex: 'image',
      render: (image) => {
        return <Image src={image.url} width={40} alt="superhero" />
      },
    },
    {
      title: 'SuperHero',
      dataIndex: 'name',
    },
    {
      title: 'Alignment',
      dataIndex: 'alignment',
      render: (alignment) => {
        return (
          <Tag color={alignment === 'good' ? 'green' : 'volcano'}>
            {alignment === 'good' ? 'HERO' : 'VILLIAN'}
          </Tag>
        )
      },
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Height',
      dataIndex: 'height',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
    },
    {
      title: 'Race',
      dataIndex: 'race',
    },
    {
      title: 'Intelligence',
      dataIndex: 'intelligence',
    },
    {
      title: 'Power',
      dataIndex: 'power',
    },
    {
      title: 'Speed',
      dataIndex: 'speed',
    },
    {
      title: 'Strength',
      dataIndex: 'strength',
    },
    {
      title: 'Work',
      dataIndex: 'work',
      ellipsis: true,
    },
  ];

export default function SuperHero() {


    const getHero = axios.create( {
        baseURL: 'https://superheroapi.com/api/10233294005917856',
       headers:{
        Authorization: `bearer ${process.env.REACT_API_tOKEN}`
       }
    })
    console.log(REACT_API_tOKEN, 'aqui')


  return (
    <div>{data.id}</div>
  )
}
