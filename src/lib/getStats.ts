export const getStats = async (apiKey: string) => {
	try {
		const meritsResponse = await fetch(
			`https://api.torn.com/user/?selections=merits&key=${apiKey}`
		);
		const workStatsResponse = await fetch(
			`https://api.torn.com/user/?selections=workstats&key=${apiKey}`
		);

		const meritsData = await meritsResponse.json();
		const workStatsData = await workStatsResponse.json();

		const stats = {
			ee: meritsData.merits['Employee Effectiveness'] || 0,
			man: workStatsData['manual_labor'] || 0,
			int: workStatsData['intelligence'] || 0,
			end: workStatsData['endurance'] || 0
		};

		return stats;
	} catch (error) {
		console.error('Error fetching stats:', error);
	}
};
