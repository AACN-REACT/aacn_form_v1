import React, { Component } from 'react';
import AACNform from '../organisms/AACN_FORM/AACNform'


function formFiller (config) {


const {endpoints, styling, fields}


}


/*
Goal: Dev: Higher-Order Component that handles endpoints and block element

Design:
1. Accepts endpoint information, styling information and component to include
2. Get event: Performs Http Get call and receives API Service data 
3. Binds data and .config layout
4. Save event: On Save click, performs put or post (depending on if Id exists)
5. Delete event: On delete click, performs delete cal/

*/