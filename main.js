export const process = (object) => ([
  ...new Set(
    Object.values(object)
      .map(e => typeof e === 'object'
        ? process(e)
        : e.split(/\s/),
      )
      .flat(Infinity),
  ),
])
