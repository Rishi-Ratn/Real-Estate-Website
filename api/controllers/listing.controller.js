import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        // now need to create the model for listing
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if(!listing) {
        return next(errorHandler(404, 'Listing not found!'));
    }
    // now if listing exists, check if the user is the owner of the listing
    if(req.user.id !== listing.userRef){
        return next(errorHandler(401, 'You can only delete your own listing!'));
    }
    // if everything is ok
    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('Listing has been deleted');
    } catch (error) {
        next(error);
    }
};

export const updateListing = async (req, res, next) => {
     // first check if listing exists or not
     const listing = await Listing.findById(req.params.id);
     if(!listing) {
         return next(errorHandler(404, 'Listing not found!'));
     }
     // now if listing exists, check if the user is the owner of the listing
     if(req.user.id !== listing.userRef){
         return next(errorHandler(401, 'You can only update your own listing!'));
     }
     // if everything is ok, update the listing
     try {
         const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, {new: true}); // updated with req.body whatever we sent, new true -> get the update one
         res.status(200).json(updatedListing);
     } catch (error) {
         next(error);
     }
};

export const getListing = async (req, res,next) => {
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }
        res.status(200).json(listing);
    } catch (error) {
        next(error);
    }
};

export const getListings = async (req, res, next) => {
    try {
         
    } catch (error) {
        next(error);
    }
};