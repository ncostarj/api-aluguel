import { Request, Response } from "express";
import { messages } from "../common/messages";
import { ProprietarioRepository } from "../models/Proprietario";

export class ProprietarioController {

  async index(request: Request, response: Response) {

    const proprietarios = await (new ProprietarioRepository()).search(request.query);

    return response.status(200).json({message: messages.list.success, data: proprietarios});
  }

  show(request: Request, response: Response) {

  }

  async store(request: Request, response: Response) {
    const repository = new ProprietarioRepository();
    const { rg } = request.body;
    const proprietarios = await repository.search({ rg });

    if(proprietarios.length > 0)
      return response.status(400).json({message: messages.insert.errorExists, data: []});

    const proprietario = await repository.store(request.body);

    return response.status(201).json({message: messages.list.success, data: proprietario});
  }

  async update(request: Request, response: Response) {
    const repository = new ProprietarioRepository();
    const context = request.body;
    const proprietarios = await repository.search({ rg: context.rg });

    if(proprietarios.length > 0)
      return response.status(400).json({message: messages.insert.errorExists, data: []});

    const proprietario = await repository.store(request.body);

    return response.status(201).json({message: messages.list.success, data: proprietario});
  }

  async delete(request: Request, response: Response) {

    return response.status(201).json({message: messages.list.success, data: []});
  }

}