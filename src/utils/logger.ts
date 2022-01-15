import logger from 'pino';
import dayjs from 'dayjs';
import pretty from 'pino-pretty';

// const log = logger({
//   prettyPrint: true,
//   base: { pid: false },
//   timestamp: () => `'time': '${dayjs().format()}'`,
// });

const stream = pretty({
  colorize: true,
  translateTime: true,
});
const log = logger(stream);

export default log;

// import logger from 'pino';
// import dayjs from 'dayjs';

// const stream = pretty({
//   colorize: true,
// });
// const log = logger(
//   { timestamp: () => `'time': '${dayjs().format()}'` },
//   stream
// );

// // const log = logger({
// //   transport: {
// //     target: `pretty`,
// //     options: {
// //       colorize: true,
// //     },
// //   },
// //   base: { pid: false },
// //   timestamp: () => `'time': '${dayjs().format()}'`,
// // });

// export default log;
