CURRENT_PARENT_DIR=$(cd $(dirname $0);cd ..; pwd)
CURRENT_DIR=$(cd $(dirname $0); pwd)
chmod +x ${CURRENT_DIR}

/Applications/wechatwebdevtools.app/Contents/MacOS/cli open --project ${CURRENT_PARENT_DIR}