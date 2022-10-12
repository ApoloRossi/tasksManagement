import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const connectDb = (handler : NextApiHandler) => {
    async(req : NextApiRequest, res : NextApiResponse) => {
        console.log('Verifica o estado da conexao ()')

    }
}