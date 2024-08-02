import { z } from "zod";
import { LOGS_TYPE } from "../enums";

export const LogRequestSchema = z.object({
    Message: z.string(),
    StackFrame: z.string(),
    Type: z.nativeEnum(LOGS_TYPE),
    Service: z.string().optional(),
    Method: z.string().optional(),
    Result: z.boolean().optional(),
    Url: z.string().optional(),
});

export type LogRequest = z.infer<typeof LogRequestSchema>;
