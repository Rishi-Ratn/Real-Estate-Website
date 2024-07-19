import express from 'express';
import { createListing, deleteListing, updateListing, getListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);       // verify token to verify user is authenticated or not 
router.delete('/delete/:id', verifyToken, deleteListing); 
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);                   // every one can get the listing, so don't make it secure 

export default router;