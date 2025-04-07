"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import axios from "axios";

function SilabaPage() {
  const [names, setNames] = useState([]);
  const getUsers = async () => {
    const red = await axios.get( `http://localhost:4000/api/monosillabs`);
    console.log(red.data.monosillabs)
    setNames(red.data.monosillabs);
 };

 useEffect(() => {

  getUsers();
  }, []);

  return (
    <div>
      foo
    </div>
  );
}

export default SilabaPage;