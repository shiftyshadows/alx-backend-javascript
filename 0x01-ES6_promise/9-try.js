export default function guardrail(mathFunction) {
  const queue = [];

  try {
    // Execute mathFunction and push the result to queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error occurs, push the error message to queue
    queue.push(`Error: ${error.message}`);
  } finally {
    // Always add "Guardrail was processed" to queue
    queue.push('Guardrail was processed');
  }

  return queue;
}
