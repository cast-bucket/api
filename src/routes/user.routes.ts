import { UserModel } from "@models/";
import { FastifyReply, FastifyRequest } from "fastify";
import * as http from "http";
import httpError from "http-errors";

export const fetchUserProfile = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const userId: string = req.params.userId;
    if (!userId) throw httpError(400, "Missing or invalid parameter: userId");
    const userProfile: any = await UserModel.getUserProfile(userId);
    if (!userProfile) {
      throw httpError(400, `Unable to find user ${userId}`);
    } else {
      res.code(200).send(userProfile);
    }
  } catch (error) {
    throw httpError(error.message);
  }
};

export const fetchUserSubscriptions = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const userId: string = req.params.userId;
    if (!userId) throw httpError(400, "Missing or invalid parameter: userId");
    const subscriptions: any = await UserModel.getUserSubscriptions(userId);
    if (!subscriptions) {
      throw httpError(400, `Unable to find subscriptions for ${userId}`);
    } else {
      res.code(200).send(subscriptions);
    }
  } catch (error) {
    throw httpError(error.message);
  }
};

export const fetchUserHistory = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const userId: string = req.params.userId;
    if (!userId) throw httpError(400, "Missing or invalid parameter: userId");
    const history: any = await UserModel.getUserHistory(userId);
    if (!history) {
      throw httpError(400, `Unable to find history for ${userId}`);
    } else {
      res.code(200).send(history);
    }
  } catch (error) {
    throw httpError(error.message);
  }
};
