
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Form } from "../../index/State-Form";

describe("Testing State-Form", () => {
    let container: Element | HTMLElement | null = null;
    const GenericForm = Form();

    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        if(container) unmountComponentAtNode(container);
        container?.remove();
        container = null;
    });

    it("should render a form with type text when type is not given", () => {
        act(() => { render(<GenericForm.getForm name="any" label="any" />, container) });
        expect(container?.getElementsByTagName("input")[0].type).toBe("text");
    });

    it("should render types given", ()=>{
        act(()=> { render(<GenericForm.getForm name="pass" type="password" label="pass" />, container)});
        expect(container?.querySelector("input")?.type).toBe("password");

        act(()=> render(<GenericForm.getForm name="number" type="number" label="number" />, container));
        expect(container?.querySelector("input")?.type).toBe("number");
    })
})



