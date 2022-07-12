import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";


const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    response.status(200).json({length: length,  data: allEntries});
}

export default allAvos;
