import { Request, Response } from "express";
import * as functions from 'firebase-functions';
import * as axios from "axios";

/**
 * 
 * @param request contains the query parameter name
 * @param response returns hello <name>
 */
export const hello_andrew = async (request: Request, response: Response): Promise<void> => {
    /**
     * If the request is localhost:3000/hello-first-last/harsha then
     * request.params.name is harsha
     */
    const name = request.params.name;
    response.json({
        message:`hello ${name}`
    })
}

/**
 * @param request unique request that contains persons firstname-lastname
 * @param response queries the hacktoberfest database and returns the user data
 */
export const andrew_tran = async (request: Request, response: Response): Promise<void> => {
    const baseurl = functions.config().baseurl.firebase; // resolves to https://cloudfunctions.net
    const data = {
        email: "andtran0703@gmail.com"
    }
    const result = await axios.default.post(baseurl, data);
    const res = result.data;
    response.json({
        result: res
    });
}
