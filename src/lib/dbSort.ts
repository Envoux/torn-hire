import type { SimpleCompany } from '$lib/searchCompanies';

// sort db by lastMailed, then by rating
export const sortDb = (a: SimpleCompany, b: SimpleCompany) => {
	// Both companies have never been mailed, sort by rating descending
	if (!a.lastMailed && !b.lastMailed) {
		return b.rating - a.rating;
	}
	// If one company has never been mailed, it comes first
	if (!a.lastMailed) return -1;
	if (!b.lastMailed) return 1;

	// Both have been mailed, sort by date so that the oldest (smallest date) is at the top
	const dateDiff = new Date(a.lastMailed).getTime() - new Date(b.lastMailed).getTime();
	if (dateDiff === 0) {
		return b.rating - a.rating;
	}
	return dateDiff;
};
