import { z } from "zod";

export const DeviceStatusRequestSchema = z.object({
    metricName: z.string(),
    value: z.string(),
    status: z.string(),
});

export const UiEventRequestSchema = z.object({
    name: z.string(),
    value: z.string(),
});

export const AddMetricRequestSchema = z.object({
    key: z.string(),
});

export type DeviceStatusRequest = z.infer<typeof DeviceStatusRequestSchema>;
export type UiEventRequest = z.infer<typeof UiEventRequestSchema>;
export type AddMetricRequest = z.infer<typeof AddMetricRequestSchema>;
