export const isOverdue = (deadline) => new Date(deadline) < new Date();
export const isNearDeadline = (deadline) => {
  const diff = new Date(deadline) - new Date();
  return diff > 0 && diff < 86400000;
};
