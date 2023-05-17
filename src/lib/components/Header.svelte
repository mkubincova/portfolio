<script lang="ts">
	import { page } from '$app/stores';

	const mainMenu: { path: string; name: string }[] = [
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Projects',
			path: '/projects'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];

	// change header opacity
	let scrollY: number;
	let header: HTMLHeadElement;
	let headerOpacity = 0;

	$: if (header) {
		headerOpacity = scrollY / header.offsetHeight < 1 ? scrollY / header.offsetHeight : 1;
	}

	function toggleNav() {
		const body = document.querySelector('body');
		body ? body.classList.toggle('offcanvas-open') : '';
	}
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 left-0 right-0 z-10 p-2 md:px-5 transition-transform duration-200"
	bind:this={header}
	style="--opacity: {headerOpacity};"
>
	<nav class="container flex gap-x-4 gap-y-2 flex-wrap items-center">
		<span class="flex-1"><a href="/" class="logo font-bold text-xl md:text-3xl">Magda.</a></span>

		<button id="toggle-nav" on:click={toggleNav} class="items-center gap-2">
			<span class="is-closed text-sm">menu</span>
			<span class="is-open text-sm">close</span>
			<span class="menu-icon"><span class="hamb-line" /></span>
		</button>

		<ul class="site-menu flex gap-8 text-base">
			{#each mainMenu as item}
				<li>
					<a href={item.path} class={$page.url.pathname === item.path ? 'active' : ''}
						>{item.name}</a
					>
				</li>
			{/each}
		</ul>

		<span class="contact-menu flex-1 text-right">
			<a href="mailto:mkubincova@proton.me">mkubincova@proton.me</a>
		</span>
	</nav>
</header>

<style lang="scss">
	header {
		background-color: rgba(255, 255, 255, var(--opacity));

		:global(.no-js) & {
			background-color: rgb(255, 255, 255);
		}
	}

	nav a {
		text-decoration: none;
		display: inline-block;
		background-image: linear-gradient(currentColor, currentColor);
		background-position: 0% 100%;
		background-repeat: no-repeat;
		background-size: 0% 2px;
		transition: background-size 0.5s;

		&.active {
			background-size: 1em 2px;
			font-weight: 500;
		}

		&:hover {
			background-size: 100% 2px;
		}

		&.logo {
			background-image: none;
		}
	}

	#toggle-nav {
		display: none;
	}

	@media (max-width: 767px) {
		:global(.js) {
			header {
				color: var(--header-color);
				transition: color 0.3s ease-in-out;

				nav {
					height: var(--menu-icon-w);
				}

				&::before {
					content: '';
					position: fixed;
					inset: 0;
					background-color: var(--color-text);
					transform: translateX(100%);
					z-index: -1;
					transition: transform 0.3s ease-in-out;
				}
			}
			.site-menu,
			.contact-menu {
				position: relative;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 30px;
				transform: translateX(100%);
				visibility: hidden;
				pointer-events: none;
				transition: transform 0.3s ease-in-out;
			}
			.site-menu {
				font-size: 1.5rem;
				line-height: 1.5;
			}

			#toggle-nav {
				display: flex;

				.menu-icon {
					width: var(--menu-icon-w);
					height: var(--menu-icon-w);
					display: flex;
					flex-direction: column;
					justify-content: center;

					.hamb-line {
						position: relative;
						width: 100%;
						height: var(--menu-icon-line-h);
						background-color: currentColor;
						&::before,
						&::after {
							content: '';
							position: absolute;
							left: 0;
							width: 100%;
							height: var(--menu-icon-line-h);
							background-color: currentColor;
							transition: rotate 0.2s ease-in-out, top 0.2s ease-in-out;
						}
						&::before {
							top: 8px;
						}
						&::after {
							top: -8px;
						}
					}
				}
				.is-open {
					display: none;
				}
			}

			// open offcanvas menu
			:global(body.offcanvas-open) {
				header {
					--header-color: var(--color-text-inverse);
					--outline-color: var(--color-text-inverse);
					&::before {
						transform: translateX(0);
					}
				}
				.site-menu,
				.contact-menu {
					transform: translateX(0);
					visibility: visible;
					pointer-events: all;
				}
				#toggle-nav {
					.is-open {
						display: inline;
					}
					.is-closed {
						display: none;
					}
					.hamb-line {
						background: transparent;
					}
					.hamb-line::before {
						rotate: -45deg;
						top: 0;
					}
					.hamb-line::after {
						rotate: 45deg;
						top: 0;
					}
				}
			}
		}
	}
</style>
