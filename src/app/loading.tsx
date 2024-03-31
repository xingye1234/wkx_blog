"use client"
import React from 'react'
import { Spin } from '@douyinfe/semi-ui';
import { IconLoading } from '@douyinfe/semi-icons';

export default function loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Spin indicator={<IconLoading />} />
    </div>
  )
}
