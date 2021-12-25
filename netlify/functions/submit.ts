import { Handler } from "@netlify/functions";

export const handler: Handler = async (evt, ctx) => {
  const { name, favColor } = JSON.parse(evt.body);
  console.log({ name, favColor, evt, ctx });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favColor,
      message: `Hey My Name is ${name}, and i like the ${favColor} color`,
    }),
  };
};
