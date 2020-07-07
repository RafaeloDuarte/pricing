const expect = require('chai').expect;
const { Cluster } = require('../../src/models');

describe('Cluster', () => {
    describe('attributes', () => {
        it('should have name', async () => {
            const cluster = await Cluster.create({ nome_loja: 'Foo' });
            expect(cluster.get('nome_loja')).to.equal('Foo');
        });
    });

    describe('validations', () => {
        it('should validate name', () => {
            const cluster = Cluster.build();
            expect(cluster.validate()).to.be.rejected;
        });
    });

 /*   describe('relations', () => {
        it('should have some clusters', async () => {
            const Cluster = await Cluster.create(
                {
                    name: 'Foo',
                    Investments: [{ name: 'A' }, { name: 'B' }]
                },
                { include: [Investment] }
            );
            expect(Cluster.get('Investments')).to.have.length(2);
        });
    });*/
});