import React from 'react'
import Create from './Create'

import Myform from "./Myform";

export default function CreateForm() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Create />
      </div>

      <Myform />
    </div>
  );
}