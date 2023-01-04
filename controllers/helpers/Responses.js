export function getResponse200(res, data, operation) {
  return res
    .status(200)
    .json({ message: `succesful operation ${operation}`, data: data });
}
export function getResponse201(res, resource, operation) {
  return res.status(201).json({
    message: `your resource ${resource} has been successfully ${operation}`,
    data: resource,
  });
}
export function getResponse400(res) {
  return res.status(400).json({ message: "Bad Request" });
}
export function getResponse401(res) {
  return res.status(401).json({ message: "Unauthorized" });
}
export function getResponse403(res) {
  return res
    .status(403)
    .json({ message: "You do not have permission to access this resource" });
}
export function getResponse404(res) {
  return res
    .status(404)
    .json({ message: "The requested resource is not found" });
}
export function getResponse500(errors, res) {
  return res.status(500).json({
    message: "ah ocurrido un error en el servidor",
    errors: errors.message,
  });
}
