import React , {useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import Card from './Card'
import { Container , Row , Col } from 'react-bootstrap';
import { Button } from '@mui/material';
import axios from 'axios'
import { motion} from 'framer-motion'

const Collections = () =>{

    //GET Request
    const [cols,setCols] = useState([])
    
    const getData = () =>{

        axios.get('http://localhost:5000/collections')
        .then(res=>{
            const val = res.data
            setCols(val)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <Container className='feed'>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Collections
        </Typography>
        <Row className='collection-btn' >
         <Col>
         <Button variant="outlined" size='large' component='span'>Collections</Button>
         </Col>
         <Col>
         <Button variant="outlined" size='large' component='span'>Favorites</Button>
         </Col>
         </Row>
         <motion.div layout className='col-grid'>
         {
            cols.map((data,index)=>{
                return (
                    <motion.div whileHover={{opacity : 0.8 ,scale : 1.05}}  key={index}>
                    <Card id={data._id} listName={data.name} />
                    </motion.div>
                )
            })
        }
         </motion.div>
        </Container>
    )
}

export default Collections