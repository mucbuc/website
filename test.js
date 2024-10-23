class TestComponent extends HTMLElement
{
	connectedCallback()
	{
		this.textContent = "hello";
	}

}

customElements.define('x-test', TestComponent);
