import { Request,Response } from "express";
import IController from "./ControllerInterface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class UserController implements IController{
    index(req: Request, res: Response): Response{
        return res.send("ini adalah enpoint Index");
    }
    create(req: Request, res: Response): Response {
        return res.send(req.body);
    }
    show(req: Request, res: Response): Response{
        throw new Error("Method not implemented.");
    }
    update(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    delete(req: Request, res: Response): Response {
        throw new Error("Method not implemented.");
    }
    
}

export default new UserController();