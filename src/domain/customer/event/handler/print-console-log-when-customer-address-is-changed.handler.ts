import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class PrintConsoleLogWhenCustomerAddressIsChanged implements EventHandlerInterface<CustomerAddressChangedEvent>{
  handle(event: CustomerAddressChangedEvent): void {
    const data = event.eventData;
    const {id, name, address} = data;
    console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}.`);
  }
}