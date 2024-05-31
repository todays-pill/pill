import customAxios from "./customAxios";

export const createPillSchedule = async (
  pillId,
  pillName,
  days,
  isBreakfast,
  isLunch,
  isDinner
) => {
  try {
    const res = await customAxios.post("/pill-schedule", {
      pillId,
      pillName,
      days,
      isBreakfast,
      isLunch,
      isDinner,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};

export const getTodayPillSchedule = async () => {
  try {
    const res = await customAxios.get("/pill-schedule/today");
    return res.data;
  } catch (error) {
    console.error(error);
    throw new ApiError();
  }
};
