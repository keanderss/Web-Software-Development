<div
	id="cookie-consent"
	class="fixed flex bottom-10 justify-center w-full z-50"
>
	<div
		role="alert"
		class="alert w-auto border-2 border-base-100 bg-gradient-to-br from-base-200 to-gray-800"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-info h-6 w-6 shrink-0"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			></path>
		</svg>
		<span>we don't use cookies.</span>
		<div>
			<button
				on:click={() =>
					document
						.getElementById("cookie-consent")
						.setAttribute("class", "hidden")}
				class="btn btn-sm btn-primary">OK</button
			>
		</div>
	</div>
</div>
