
document.getElementById('payment-method').addEventListener('change', function() {
    const formaPagamento = document.getElementById('payment-method').value;
    const qrPix = document.getElementById('qr-pix');
    const formCartao = document.getElementById('form-cartao');
    const totalCompra = document.getElementById('total-compra');

    const precoInteira = 40;
    const precoMeia = 20;

    const quantidadeInteiras = parseInt(document.getElementById('full-tickets').value);
    const quantidadeMeias = parseInt(document.getElementById('half-tickets').value);
    const totalInteiras = quantidadeInteiras * precoInteira;
    const totalMeias = quantidadeMeias * precoMeia;
    const total = totalInteiras + totalMeias;

    totalCompra.innerText = `Total da Compra: R$${total.toFixed(2)}`;

    if (formaPagamento === 'pix') {
        qrPix.style.display = 'block';
        formCartao.style.display = 'none';
    } else if (formaPagamento === 'credito' || formaPagamento === 'debito') {
        qrPix.style.display = 'none';
        formCartao.style.display = 'block';
    } else {
        qrPix.style.display = 'none';
        formCartao.style.display = 'none';
    }
});

