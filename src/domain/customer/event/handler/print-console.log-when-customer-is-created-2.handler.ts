import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class PrintConsoleLogWhenCustomerIsCreatedHandler2 implements EventHandlerInterface<CustomerCreatedEvent>{
  handle(event: CustomerCreatedEvent): void{
    const eventName = event.constructor.name;
    console.log(`Esse é o segundo console log do evento: ${eventName}`);
  }
}