"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokenFromHeader = extractTokenFromHeader;
function extractTokenFromHeader(request) {
    const [type, token] = request.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
}
//# sourceMappingURL=token-utils.js.map