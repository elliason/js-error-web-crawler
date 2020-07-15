import InterfacePageLog from './interfacePageLog';

interface InterfacePageResult {
    url: string;
    responseCode: number;
    logs: InterfacePageLog[];
}

export default InterfacePageResult;
