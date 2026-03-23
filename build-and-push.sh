#!/usr/bin/env bash
set -euo pipefail

REGISTRY="ccr.ccs.tencentyun.com"
NAMESPACE="skyapi"
IMAGE_NAME="byteorigin"
TAG="${1:-latest}"

FULL_IMAGE="${REGISTRY}/${NAMESPACE}/${IMAGE_NAME}:${TAG}"

echo "==> 构建镜像: ${FULL_IMAGE} (linux/amd64)"
docker buildx build \
  --platform linux/amd64 \
  --build-arg VITE_APP_URL="https://www.byteorigin.net" \
  --build-arg VITE_ENV=production \
  --build-arg VITE_CURRENCY=CNY \
  --push \
  -t "${FULL_IMAGE}" .

echo "==> 完成! 镜像已推送到 ${FULL_IMAGE}"
echo "==> 云服务器拉取命令: docker pull ${FULL_IMAGE}"
