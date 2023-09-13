const leaderboard_url =
  "https://api.steampowered.com/ICSGOServers_730/GetLeaderboardEntries/v1";
const format = "json";
const lbname = "official_leaderboard_premier";

export type Region =
  | "Africa"
  | "Asia"
  | "Australia"
  | "China"
  | "Europe"
  | "NorthAmerica"
  | "SouthAmerica"
  | "World";
export type Season = "season1";

export interface LeaderboardOptions {
  season?: Season;
  region?: Region;
}

export async function getLeaderboard(
  options?: LeaderboardOptions
): Promise<LeaderboardResult> {
  const { season = "season1", region = "World" } = options || {};
  const url = new URL(leaderboard_url);
  url.searchParams.append("format", format);
  region !== "World"
    ? url.searchParams.append("lbname", `${lbname}_${season}_${region}`)
    : url.searchParams.append("lbname", `${lbname}_${season}`);

  const response = await $fetch<LeaderboardResult>(url.toString(), {
    headers: { Accept: "application/json", Host: "api.steampowered.com" },
  });
  return response;
}

export interface LeaderboardResult {
  result: {
    data: number;
    entries: LeaderboardEntry[];
  };
}

export interface LeaderboardEntry {
  rank: number;
  score: number;
  name: string;
  detailData: string;
}

export default defineEventHandler(async (event) => {
  const query = getQuery<{ season?: Season; region?: Region }>(event);
  const { season = "season1", region } = query;
  const leaderboard = await getLeaderboard({ season, region });
  return {
    leaderboard,
  };
});
