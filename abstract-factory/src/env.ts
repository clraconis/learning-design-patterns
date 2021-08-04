let env: 'PM' | 'Motif';

export function setEnv(newEnv: typeof env) {
  env = newEnv;
  console.log(`Set env to ${newEnv}`);
}

export function getEnv(): typeof env {
  return env;
}

// set to Motif by default
setEnv('Motif');
