import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Productos from './Productos'
import products from '../product-data'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:theme.spacing(3),
  },
  
}));

export default function Products({productos}) {
  /* const [productos,setProductos]=useState([]);
    
  useEffect(()=>{
      axios("https://my-json-server.typicode.com/FranciscoEscobar97/api/lista").then((res)=>setProductos(res.data));
  },[]); */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
            
            {productos.map((prod)=>{
              return(
                  
                  
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <Productos key={prod.id}   product={prod}/>
                </Grid>
                     
                  
                  
              );
          })}

      
      </Grid>
    </div>
  );
}
