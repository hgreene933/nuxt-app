export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Handle validation
  if (body.firstName === "error") {
    throw createError({
      statusCode: 403,
      message: "Not that name",
      statusMessage: "Really not that name",
    });
  }

  console.log(body);
  // await new Promise((resolve) => setTimeout(() => resolve(true), 4000));

  return { submitted: true };
});
