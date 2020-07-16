interface InterfacePageLog {
    type: 'error' | 'pageerror' | 'console';
    errorData: Error;
    details?: {
        location?: {
            url: string;
        };
    };
}

export default InterfacePageLog;
