export interface DeviceStatusRequest {
    metricName: string;
    value: string;
    status: string;
}

export interface UiEventRequest {
    name: string;
    value: string;
}

export interface AddMetricRequest {
    key: string;
}
