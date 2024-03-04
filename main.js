export const process = (object) => ([
  ...new Set(
    Object.values(object)
      .map(e => typeof e === 'object'
        ? Object.values(e).map((e) => e.split(/\s/))
        : e.split(/\s/),
      )
      .flat(Infinity),
  ),
])
