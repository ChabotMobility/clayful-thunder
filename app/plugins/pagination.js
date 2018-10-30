const groupStart = (group, pagesAtOnce) => {
	return ((group - 1) * pagesAtOnce) + 1;
};

const groupEnd = (group, pagesAtOnce) => {
	return groupStart(group, pagesAtOnce) + pagesAtOnce - 1;
};

module.exports = (options = {}) => {

	const {
		type = 'normal',
		container,
		currentPage = 1,
		totalResult,
		resultPerPage,
		pagesAtOnce = 10,
		onPageChange = () => {}
	} = options;


	const lastPage = Math.ceil(totalResult / resultPerPage);
	const totalGroups = Math.ceil(lastPage / pagesAtOnce);
	const currentGroup = Math.ceil(currentPage / pagesAtOnce);
	const currentGroupStart = groupStart(currentGroup, pagesAtOnce);

	const iterator = Array.apply(null, Array(pagesAtOnce))
						.map((v, i) => i)
						.filter(v => currentGroupStart + v <= lastPage);

	if (iterator.length <= 1) {
		return;
	}

	const page = (text, type, page, current) => `
		<li data-page="${ page }"
			class="${ type } ${ page === current ? 'current' : '' }">
			<span>${ text || page }</span>
		</li>
	`.trim();

	const $pagination = $([
		`<ul class="thunder--pagination ${type}">`,

			currentGroup <= 1 ?
				'' :
				page('<', 'thunder--pagination-prev', groupEnd(currentGroup - 1, pagesAtOnce)),

			...iterator.map(i => page(
				null,
				'thunder--pagination-page',
				currentGroupStart + i,
				currentPage
			)),

			currentGroup >= totalGroups ?
				'' :
				page('>', 'thunder--pagination-next', groupStart(currentGroup + 1, pagesAtOnce)),

		`</ul>`,
	].join(''));

	container.html($pagination);

	$pagination.find('[data-page]').on('click', function() {

		const page = $(this).data('page');

		if (currentPage === page) return;

		return onPageChange({ page });

	});

};