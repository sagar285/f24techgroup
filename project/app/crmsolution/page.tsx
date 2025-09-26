import CustomCRMDevelopment from "./customdev/page";
import DynamicsIntegration from "./dynamicmicrosoft/page";
import HubSpotIntegration from "./hubspot/page";
import NetSuiteConsulting from "./netsuite/page";
import SalesforceSolutions from "./salesforce/page";
import ZohoDevelopment from "./zohodev/page";
export default function CRMSolutions() {
  return (
    <div>
      <ZohoDevelopment />
      <NetSuiteConsulting />
      <CustomCRMDevelopment />
      <SalesforceSolutions />
      <HubSpotIntegration />
      <DynamicsIntegration />
    </div>)
}