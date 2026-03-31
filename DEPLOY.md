# 🚀 Hướng dẫn Deploy lên GitHub Pages

Dự án này sử dụng GitHub Actions để tự động deploy website Docusaurus lên GitHub Pages.

## 📋 Yêu cầu

- Repository trên GitHub
- GitHub Actions được bật (mặc định đã bật)
- Branch `master` hoặc `main` chứa source code

## ⚙️ Thiết lập

### 1. Cấu hình GitHub Pages

1. Vào **Settings** của repository trên GitHub
2. Vào mục **Pages** (ở sidebar bên trái)
3. Trong phần **Source**, chọn:
   - **Deploy from a branch**: `gh-pages`
   - **Branch**: `gh-pages` / `/ (root)`
4. Click **Save**

### 2. Kiểm tra cấu hình

File `docusaurus.config.ts` đã được cấu hình với:
- `url`: `https://HoDuongQuocHuy278.github.io`
- `baseUrl`: `/gioithieusanpham/`
- `organizationName`: `HoDuongQuocHuy278`
- `projectName`: `gioithieusanpham`

## 🚀 Deploy tự động (Khuyến nghị)

### Cách 1: Sử dụng GitHub Actions (Tự động)

1. Push code lên branch `master` hoặc `main`:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push origin master
   ```

2. GitHub Actions sẽ tự động:
   - Build website
   - Deploy lên branch `gh-pages`
   - Website sẽ có sẵn tại: `https://HoDuongQuocHuy278.github.io/gioithieusanpham/`

3. Kiểm tra workflow:
   - Vào tab **Actions** trên GitHub
   - Xem trạng thái workflow **Deploy to GitHub Pages**

### Cách 2: Deploy thủ công

Nếu muốn deploy thủ công (không khuyến nghị):

```bash
# Build website
yarn build

# Deploy lên GitHub Pages
GIT_USER=HoDuongQuocHuy278 yarn deploy
```

**Lưu ý**: Cần có quyền push vào repository và đã cấu hình SSH key hoặc Personal Access Token.

## 🔍 Kiểm tra sau khi deploy

1. Đợi vài phút để GitHub xử lý
2. Truy cập: `https://HoDuongQuocHuy278.github.io/gioithieusanpham/`
3. Nếu chưa thấy, kiểm tra:
   - Workflow có chạy thành công không (tab Actions)
   - Branch `gh-pages` đã được tạo chưa
   - Settings > Pages đã cấu hình đúng chưa

## 📝 Lưu ý

- Mỗi khi push code lên `master`/`main`, website sẽ tự động được cập nhật
- Có thể trigger deploy thủ công từ tab **Actions** > **Deploy to GitHub Pages** > **Run workflow**
- Nếu thay đổi `baseUrl` trong config, nhớ cập nhật lại Settings > Pages

## 🐛 Xử lý lỗi

### Lỗi: Workflow không chạy
- Kiểm tra file `.github/workflows/deploy.yml` có tồn tại
- Kiểm tra branch name (master/main) có đúng không

### Lỗi: Build fail
- Kiểm tra lỗi trong tab Actions
- Chạy `yarn build` local để kiểm tra lỗi

### Lỗi: 404 trên GitHub Pages
- Kiểm tra `baseUrl` trong `docusaurus.config.ts` có đúng không
- Kiểm tra Settings > Pages có cấu hình đúng branch `gh-pages` không
- Đợi thêm vài phút (GitHub cần thời gian xử lý)

## 🔗 Liên kết hữu ích

- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

